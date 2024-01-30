import React, { FC } from 'react';
import { ItemContainer } from './TableStyles';
import fiImage from '../assets/employee1.jpg';
import seImage from '../assets/employee2.png';
import thImage from '../assets/employee3.jpg';
import foImage from '../assets/employee4.jpg';
import fifImage from '../assets/employee5.jpg';
import defaultImage from '../assets/default.png';
import Image from './Image';

const images = {
  fi: fiImage,
  se: seImage,
  th: thImage,
  fo: foImage,
  fif: fifImage,
  default: defaultImage,
};

interface CourseItemProps {
  item: { id: number; course: string; inProgress: boolean };
  onClick: () => void;
}

const CourseItem: FC<CourseItemProps> = ({ item, onClick }) => {
  const getImageSrc = () => {
    switch (item.id) {
      case 1:
        return images.fi;
      case 2:
        return images.se;
      case 3:
        return images.th;
      case 4:
        return images.fo;
      case 5:
        return images.fif;
      default:
        return images.default;
    }
  };

  return (
    <ItemContainer onClick={onClick}>
      <Image
        src={getImageSrc()}
        alt="Employee Image"
        width={45}
        height={45}
        style={{borderRadius: '20px'}}
      />
      <div style={{fontWeight: '700', color: '#f2f2f2'}}>{item.course}</div>
      <div style={{color: '#2938b9'}}>{item.inProgress ? 'In Progress' : 'Done'}</div>
    </ItemContainer>
  );
};

export default CourseItem;
