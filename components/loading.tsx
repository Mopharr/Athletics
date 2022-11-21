import style from "../styles/loading.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const hide: any = useRef();

  useEffect(() => {
    gsap.to(hide.current, { opacity: 0, duration: 2, delay: 5 });
  }, []);

  return (
    <div className={style.loading} ref={hide}>
      <div className={style.content}>
        <div className={style.beep}>
          <div className={style.thi}></div>
          <div className={style.sec}></div>
          <div className={style.fir}></div>
          <Image
            src="/Star.png"
            width={50}
            height={50}
            alt="logo"
            className={style.beepImg}
          />
        </div>

        <h2>athletics .</h2>
        <p>Help Yourself. Manage Your Tasks Safely...</p>
      </div>
    </div>
  );
};

export default Loading;
