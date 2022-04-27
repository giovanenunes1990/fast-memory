import { GridItemType } from '../../types/GridItemType';
import * as C from './style';
import { items } from '../../data/items';

import Gn from '../../svgs/gn.png';

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container onClick={onClick} showBg={item.permanentShown || item.shown}>
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={Gn} alt="Logo" opacity={.3} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="Item" />
            }
        </C.Container>
    );
}