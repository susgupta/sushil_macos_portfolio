import { useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        //get from window store
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        //for window open animation
        useGSAP(() => {
            const currentElement = ref.current;

            if (!currentElement || !isOpen) return;

            //make element visible
            currentElement.style.display = 'block';

            //create window open animation
            gsap.fromTo(currentElement, {
                scale: 0.8,
                opacity: 0,
                y: 40
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power3.out'
            });

        }, [isOpen]);

        useGSAP(() => {
            const currentElement = ref.current;

            if (!currentElement) return;

            const [instance] = Draggable.create(currentElement, {onPress: () => focusWindow(windowKey)});

            return () => instance.kill();

        }, []);

        useLayoutEffect(() => {
            const currentElement = ref.current;

            if (!currentElement) return;

            //update depending on isOpen state
            currentElement.style.display = isOpen ? "block" : "none";

        }, [isOpen]);

        return( 
            <section 
                id={windowKey} 
                ref={ref} 
                style={{zIndex}} 
                className="absolute"
            >
                <Component {...props} />
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}

export default WindowWrapper