import type { Nullable } from "@/common/types"
import { showErrorToast, showSuccessToast } from "@/common/utils"
import { useCreateTrackMutation } from "../../../api/tracksApi.ts"
import { type ChangeEvent, useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"

export const AddTrackForm = () => {
  const [file, setFile] = useState<Nullable<File>>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<{ title: string }>({ mode: "onChange" })

  const [mutate, { isLoading }] = useCreateTrackMutation()

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("audio/")) {
      showErrorToast("Неверный формат")
      return
    }

    if (file.size > 1024 * 1024) {
      showErrorToast("Файл слишком большой (макс. 1 МБ).")
      return
    }

    setFile(file)
  }

  const onSubmit: SubmitHandler<{ title: string }> = ({ title }) => {
    if (!file) {
      alert("no file")
      return
    }
    mutate({ title, file })
      .unwrap()
      .then(() => {
        showSuccessToast("Трек успешно загружен")
        reset()
        setFile(null)
      })
  }

  const isSubmitDisabled = !file || !isValid || isLoading

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Добавить новый трек</h2>
      <div>
        <label>
          Введите название трека:
          <input {...register("title")} placeholder="Введите название трека" />
        </label>
      </div>
      <div>
        <label>
          Загрузите аудио файл:
          <input type="file" accept="audio/*" onChange={uploadHandler} />
        </label>
      </div>
      <button type="submit" disabled={isSubmitDisabled}>
        {isLoading ? "Загрузка..." : "Добавить трек"}
      </button>
    </form>
  )
}
