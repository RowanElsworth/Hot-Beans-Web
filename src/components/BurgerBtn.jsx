
export default function Burger({ isOpen }){
  return(
    <>
      <div className="burger-btn">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx>{`
        .burger-btn{
          position: relative;
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          cursor: pointer;
          z-index: 3;
        }
        .burger{
          width: 4rem;
          height: 0.5rem;
          border-radius: 15px;
          background-color: #FF005C;
          transform-origin: 1px;
          transition: all 0.4s linear;
        }
        .burger1{
          transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2{
          transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${ isOpen ? 0 : 1};
        }
        .burger3{
          transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
          
      `}</style>
    </>
  )
}