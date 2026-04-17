import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
const ResCategory = ({ data, showItems, setShowIndex }) => {
  if (!data) return null;  // ← Add this line

  // console.log(data)
  const { title, itemCards } = data;
  const dispatch = useDispatch();
  const addToCart = (items)=>{
    // Dispatch an Action
    dispatch(addItems(items));

    
  }

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">

      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
       onClick={() => setShowIndex && setShowIndex()}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards?.length})
        </span>

        <span>⬇️</span>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="mt-3">
          {itemCards?.map((item) => (
            <div
              key={item.card.info.id}
              className="border-b py-2 flex justify-between items-center gap-4"
            >
                <div className="flex items-start flex-wrap w-9/12 gap-4 text-left">
                    <span className="">{item.card.info.name}</span>
                    <span>
                    ₹
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </span>
                    <span className="block text-[10px]">{item?.card?.info?.description}</span>
              </div>
                <div className="w-3/12 relative">
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt="card image"
                      className="w-full  object-cover border border-1 border-gray-200 shadow-md rounded-md"
                    />
                    <button
                    // HW know the diffrence in all 3
                    //  onClick={addToCart(items)}
                     onClick={()=> addToCart(item)}
                    //  onClick={addToCart}
                     className="p-2 absolute opacity-50 bg-black text-white mx-auto z-10 w-100 text-[14px] left-0 top-1 right-0 border ">ADD +</button>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResCategory;