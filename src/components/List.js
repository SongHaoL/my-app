import React from 'react';
import { list } from '../data/data';
import { Button, Image, Modal } from 'antd-mobile';
import './List.css';

const Example = function() {
  return (
    <>
      <div className='list'>
        {list.map(v =>
          <div className='list-item' key={v.name}>
            <div className='item-con'>
              <Image src={v.imgsrc} fit='fill' />
              <p className='item-name'>{v.name}</p>
              <Button
                size='small'
                color='primary'
                className='btn'
                onClick={() => {
                  Modal.alert({
                    image: v.imgsrc,
                    title: '学习',
                    content: '学习说明....',
                  })
                }}
              >
                学习
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Example;