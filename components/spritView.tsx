type Props = {
    imgSrc?: string;
    videoSrc?: string;
    title: string;
    description: string;
    isRight?: boolean;
}

function SpritViewImg(props: Props){
  if(props.isRight == true) {
    return (    
      <section>
        <div className='grid grid-cols-1 m-5 lg:grid-cols-2 gap-3 bg-gray-900 justify-center items-center rounded-md'>
          <div className='m-5'>
              <h1 className='text-2xl mb-3 font-bold'>{props.title}</h1>
              <p className='text-sm'>
                {props.description}
              </p>
          </div>
          <div className='m-5'>
            <img src={props.imgSrc} alt='logo' className="object-cover"/>
          </div>
        </div>
      </section>
    )
  }
  else {
    return (
      <section>
        <div className='grid grid-cols-1 m-5 lg:grid-cols-2 gap-3 bg-gray-900 justify-center items-center rounded-md'>
          <div className='m-5'>
            <img src={props.imgSrc} alt='logo' className="object-cover"/>
          </div>
          <div className='m-5'>
            <h1 className='text-2xl mb-3 font-bold'>{props.title}</h1>
            <p className='text-sm'>
                {props.description}
            </p>
          </div>
        </div>
      </section>
    )
  }  
}

function SpritViewVideo(props: Props){
  if(props.isRight == true){
    return (
      <section>
        <div className='grid grid-cols-1 m-5 lg:grid-cols-2 gap-3 bg-gray-900 justify-center items-center rounded-lg'>
          <div className='m-5'>
            <h1 className='text-2xl mb-3 font-bold'>{props.title}</h1>
            <p className='text-sm'>
                {props.description}
            </p>
          </div>
          <div className='m-5'>
            <iframe className="w-full aspect-video" src={props.videoSrc} title="Fireworks Sample" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    );
  }
  else {
    return (
      <section>
        <div className='grid grid-cols-1 m-5 lg:grid-cols-2 gap-3 bg-gray-900 justify-center items-center rounded-lg'>
          <div className='m-5'>
            <iframe className="w-full aspect-video" src={props.videoSrc} title="Fireworks Sample" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='m-5'>
              <h1 className='text-xl my-3 font-bold'>{props.title}</h1>
              <p className="text-sm">
                  {props.description}
              </p>
          </div>
        </div>
      </section>
    );
  }
}

export {SpritViewImg, SpritViewVideo}