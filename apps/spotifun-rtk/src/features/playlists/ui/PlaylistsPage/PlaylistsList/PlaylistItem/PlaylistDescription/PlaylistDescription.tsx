import type { PlaylistAttributes } from "../../../../../api/playlistsApi.types"

type Props = {
  attributes: PlaylistAttributes
}

export const PlaylistDescription = ({ attributes }: Props) => {
  const { description, tags, addedAt, order } = attributes
  return (
    <>
      <div>
        <b>description:</b> <span>{description || "Описание не добавлено"}</span>
      </div>
      <div>
        <b>order:</b> <span>{order}</span>
      </div>
      <div>
        <b>tags:</b> <span>{tags.length ? tags.map((t) => t) : "Теги не добавлены"}</span>
      </div>
      <div>
        <b>added date:</b> <span>{new Date(addedAt).toLocaleDateString()}</span>
      </div>
    </>
  )
}
