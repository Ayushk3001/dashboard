import React from 'react';
import { ColorPicker, ColorPickerComponent} from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPickerr = () => {
  return (
     <div className='m-2 md:m-10 mt-24 p-2 
       md:p-10 bg-white rounded-3xl'>
       <Header category= 'App' title="Color Picker"/>
       <div className='text-center'>
        <div  id='preview'/>
        <div className='flex justify-center
        items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold
            mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
            id='inline-pallet'
            mode='Palette'
            modeSwitcher={false}
            inline
            showButtons = {false}
            change = {change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold
            mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
            id='inline-pallet'
            mode='Picker'
            modeSwitcher={false}
            inline
            showButtons = {false}
            change = {change}
            />
          </div>

        </div>
       </div>
     </div>
  )
}

export default ColorPickerr
