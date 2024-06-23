import { useContext } from 'react';
import VideoContext from './VideoContext';

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export default useVideoContext;