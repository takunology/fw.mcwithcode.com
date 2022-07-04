import type { NextPage } from 'next'
import Head from "next/head"
import { CollectionCard } from '../components/collections';
import {SpritViewImg, SpritViewVideo} from '../components/spritView';

const title01: string = "マイクラで花火大会を実現する";
const description01: string = "Fireworks Project は Minecraft で打ち上げ花火を楽しめるコンテンツを提供するプロジェクトです。マイクラの世界で花火を打ち上げるためには花火アイテムの製作と、打ち上げるための装置（ディスペンサー）が必要ですが、本プロジェクトではC#プログラミングを用いて打ち上げ花火を実現します。";
const title02: string = "花火の演出";
const description02: string = "C#プログラミングを用いてマイクラ内で花火を打ち上げている様子です。花火を打ち上げる際にはNBTというマイクラのデータ構造を使用します。このデータをプログラムから定義し、時間差を加えることで動画のような演出が可能です。"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-cover bg-center md:bg-fixed" style={{backgroundImage:("url(./images/bg.webp)")}}>
      <Head>
        <title>Fireworks Project | Minecraft with Code Project</title>
      </Head>
      <main className='lg:max-w-screen-2xl md:px-20 ms:px-5 mx-auto'>
        <div>
          <section>
            <div className='text-center'>
              <h1 className='text-2xl my-5'>Minecraft with Code Project <br/> Fireworks Project</h1>
              <p className='text-sm mb-10'>マイクラ花火師を目指す。<br/>Minecraft と C# プログラミングによる、花火大会の実現と演出。</p>
            </div>
          </section>
          <SpritViewImg imgSrc='./images/00.webp' title={title01} description={description01} isRight={true}/>
          <SpritViewVideo videoSrc='https://www.youtube.com/embed/9yzj5DeJ94c' title={title02} description={description02}/>      
          <section>
            <div className="grid lg:grid-cols-2 gap-6 m-5">
              <CollectionCard title='マイクラ花火師入門（8月公開予定）' category='Document' imgSrc='./images/dummy.webp' href=''/>
              <CollectionCard title='花火のレシピノート' category='Code' imgSrc='./images/cat.webp' href='https://zenn.dev/takunology/scraps/9462b03d13dd0a'/>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default Home
