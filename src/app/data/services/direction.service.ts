import { Injectable } from '@angular/core';

import { DirectionItem } from '../../club-directions/DirectionItem';
import { DIRECTION_ITEM_LIST } from '../content/direction.data';

@Injectable()
export class DirectionService {

    getDirections(): DirectionItem[] {
        return DIRECTION_ITEM_LIST;
    }
}
