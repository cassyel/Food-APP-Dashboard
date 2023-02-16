import { Fragment } from 'react';
import { Overlay, ModalBody } from './styles';

interface IOrderModalProps {
  visible: boolean
  handleModal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}


export function OrderModal({ visible, handleModal }: IOrderModalProps) {
  return (
    <Fragment>
      {
        visible && (
          <Overlay onClick={handleModal}>
            <ModalBody aria-label='visibleModal'>OrderModal</ModalBody>
          </Overlay>
        )
      }
    </Fragment>
  );
}
