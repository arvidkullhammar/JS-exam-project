/** @format */

import classes from './index.module.css';
import Image from 'next/future/image';
import landing from '.././Images/landing.jpg';

export default function Home() {
  return (
    <div className={classes.container}>
      <Image
        className={classes.containerImg}
        src={landing}
        alt="Children playing football"
        width="50px"
        height="50px"
      />
      <title>GrassRoot Inc.</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/football.ico" />

      <main>
        <h1 className={classes.title}>GrassRoot</h1>
      </main>
    </div>
  );
}
