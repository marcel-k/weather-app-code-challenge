import React, { ChangeEvent, FC, MouseEvent, useContext, useState } from 'react';

import { Popover, PopoverProps } from '../../components';
import { LocationContext } from '../../context';
import { CountryCode } from '../../services';
import * as S from './LocationSearchPopoverStyle';

interface LocationSearchPopoverProps extends PopoverProps {

}

/**
 * Complex popover component that displays a form for inputting a geolocation.
 * Will change the location property on the LocationContext when ok is clicked.
 * @param props 
 * @returns 
 */
export const LocationSearchPopOver: FC<LocationSearchPopoverProps> = (props) => {
  const { onClose = () => { }, ...popoverProps } = props;

  // Note: formState properties are intentionally lower case
  const [formState, setFormState] = useState({ cityname: '', countrycode: '' as CountryCode });
  const { changeLocation } = useContext(LocationContext);

  const handleOkClick = (e: MouseEvent) => {
    if (!!formState.cityname && !!formState.countrycode) {
      e.preventDefault();
      changeLocation({ cityName: formState.cityname, countryCode: formState.countrycode });
      onClose();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  }

  return (
    <Popover onClose={onClose} {...popoverProps}>
      <S.InputForm onSubmit={e => e.preventDefault()}>
        <S.Fieldset>
          <S.InputLabel htmlFor={'cityname'}>CityName</S.InputLabel>
          <S.Input
            required
            type={'search'}
            name={'cityname'}
            onChange={(e) => handleInputChange(e, 'cityname')}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.InputLabel htmlFor="countrycode">CountryCode (nl, de, uk, se, etc.)</S.InputLabel>
          <S.Input
            required
            type={'search'}
            name={'countrycode'}
            onChange={(e) => handleInputChange(e, 'countrycode')}
          />
        </S.Fieldset>
        <S.OkButton type={'submit'} onClick={handleOkClick}>OK</S.OkButton>
      </S.InputForm>
    </Popover>
  )
}
