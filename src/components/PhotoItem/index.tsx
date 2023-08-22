import * as C from './styles';

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void
}

export const PhotoItem = ({url, name, onDelete}: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}
      <C.DeleteBtn onClick={()=>onDelete(name)}>🗑️</C.DeleteBtn>
    </C.Container>
  );
}
