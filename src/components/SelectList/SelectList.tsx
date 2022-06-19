import React from 'react';
import tw from "twin.macro";

import { ICategory } from '../../services/responses';

type Props = {
    id: string,
    label?: string,
    optionList: Array<ICategory>,
    optionListPlaceholder: string
}

const SelectList = ({ id, label, optionList, optionListPlaceholder }: Props) => {

    const Label = tw.label`block mb-2 text-sm font-medium text-gray-900`;
    const SelectListContainer = tw.select`bg-white block shadow-md p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`;

    return (
        <div>
            {label &&
                <Label htmlFor={id}>
                    {label}
                </Label>
            }

            <SelectListContainer id={id}>
                <option selected>{optionListPlaceholder}</option>

                {optionList.map((item, index) =>
                    <option value={item.id} key={`${id}-${index}`}>
                        {item.name}
                    </option>
                )

                }

            </SelectListContainer>
        </div>

    )
}

export default SelectList