import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <div className="py-8 px-8 m-2 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block h-24 w-24 object-cover mx-auto rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">
            {props.role ? props.role : "no role"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {props.editEmployee}
          {props.removeEmployee}
        </div>
      </div>
    </div>
  );
}

export default Employee;
