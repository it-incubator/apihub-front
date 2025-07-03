import { Modal } from "@/common/components"
import s from "./LoginModal.module.scss"

type Props = {
  open: boolean
  onClose: () => void
  onClick: () => void
}
export const LoginModal = ({ open, onClose, onClick }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <p className={s.title}>Millions of Tracks. Free on Spotifun.</p>
        <div>
          <button className={`${s.btn} ${s.btn_grey}`} onClick={onClick}>
            Сontinue without Sign In
          </button>
          <button className={`${s.btn} ${s.btn_pink}`} onClick={onClick}>
            Sign up with APIHUB
          </button>
        </div>
      </div>
    </Modal>
  )
}
