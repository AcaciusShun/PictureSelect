import React,{Component} from 'react';
import PictureSelece from './PictureSelect'


const Page = () => {
  const [value, setValue] = React.useState(['1']);
  const picutres = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ]; // 同上面的数据
  
  console.log(value); // 输出用户选择图片 id。
  
  return <PictureSelece pictures={picutres} value={value} onChange={(value) => setValue(value)} />
};


export default Page;