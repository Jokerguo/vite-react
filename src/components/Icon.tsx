import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3189387_cbeny3xsk0v.js',
});

type Props = {
  name: string
}

const Icon: React.FC<Props> = (props) => { 
  return (
    <MyIcon type={`icon-${props.name}`} />
  )
}

export default Icon