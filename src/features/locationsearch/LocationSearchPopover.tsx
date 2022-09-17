import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { Popover, PopoverProps } from "../../components"
import { LocationContext } from "../../context";
import { CountryCode } from "../../services";

import * as S from './LocationSearchPopoverStyle';

interface LocationSearchPopoverProps extends PopoverProps {

}

export const LocationSearchPopOver: FC<LocationSearchPopoverProps> = (props) => {
  const { onClose = () => { }, ...popoverProps } = props;

  // Note: formState properties are intentionally lower case
  const [formState, setFormState] = useState({ cityname: '', countrycode: '' as CountryCode });
  const { changeLocation } = useContext(LocationContext);

  const handleOkClick = () => {
    changeLocation({ cityName: formState.cityname, countryCode: formState.countrycode });
    onClose();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  }

  return (
    <Popover onClose={onClose} {...popoverProps}>
      <S.InputForm>
        <S.Fieldset>
          <S.InputLabel htmlFor={'cityname'}>CityName</S.InputLabel>
          <S.Input name={'cityname'} type={'search'} onChange={(e) => handleInputChange(e, 'cityname')} />
        </S.Fieldset>
        <S.Fieldset>
          <S.InputLabel htmlFor="countrycode">CountryCode</S.InputLabel>
          <S.Input name={'countrycode'} type={'search'} onChange={(e) => handleInputChange(e, 'cityname')} />
        </S.Fieldset>

      </S.InputForm>
      <S.OkButton onClick={handleOkClick}>OK</S.OkButton>
    </Popover>
  )
}
