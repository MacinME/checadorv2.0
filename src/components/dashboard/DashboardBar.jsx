export const DashboardBar = ({ onModalFilter }) => {
  return (
    <div className="w-full absolute top-0 left-0 bg-transparent h-10 rounded-tl-xl rounded-tr-xl flex items-center py-2 px-2">
        <div className="flex gap-2 absolute right-0 px-3">
          <button
              className="w-4 h-4 bg-yellow-500 hover:bg-yellow-700 rounded-full"
          >
          </button>
          <button
              onClick={ () => onModalFilter() }
              className="w-4 h-4 bg-red-500 hover:bg-red-700 rounded-full"
          >
          </button>
        </div>
    </div>
  )
}
