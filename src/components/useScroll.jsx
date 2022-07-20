import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

export const useScroll = (thresh=0.4) => {
    const controlls = useAnimation();
    const [element, view] = useInView({threshold:thresh});
    if(view) {
        controlls.start("show");
    } else {
        controlls.start("hidden");
    }
    return [element, controlls]
}