import Container from "@/components/elements/Container"



export const DetailPost = () => {
 
  return (
    <>
    <Container>

    <div className="text-white/50 flex flex-wrap  w-full py-20 gap-4">
        <div className="flex w-full items-center justify-center text-white/50">
            <p>UI DESIGN</p>
            <span>&bull;</span>
            <p>July 2, 2021</p>
        </div>
        <div className="flex w-full justify-center ">
            <h2 className="text-white text-2xl md:w-7/12 text-center w-full">Understanding color theory: the color wheel and finding complementary colors</h2>
        </div>
        <div className="flex py-3 justify-center w-full">
           <div className="w-14">
                <img src="/Ellipse-1.png" alt="" />
            </div>
           <div className="px-4">
                <h2 className="text-white">Leslie Alexnder</h2>
                <p className=" text-white/50 ">UI Desainer</p>
           </div>
          </div>
          <div className="w-full mx-auto">
            <img className="rounded-xl" src="/Featured.png" alt="" />
          </div>

          <div className=" w-3/4 mx-auto text-xl text-white py-6 leading-relaxed">
             <p className="py-6"> {`Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, 
             to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening. 

           
          `}
          </p>
          <p className="py-6">{`
             Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass.
              Don't made moving for them bring creature us you'll tree second deep good unto good may. 
              Us yielding.`}          
            </p>
            <p  className="py-4">{`Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.`}</p>
          </div>
    </div>

    </Container>
    </>
  )
}
