// Icons
import Envelope from "../../Icons/Envelope";
import Trash from "../../Icons/Trash";
import Bell from "../../Icons/Bell";
import Chat from "../../Icons/ChatIcon";

const Menu = () => {
  return (
    <ul className="space-y-7">
      <li>
        <Envelope className="h-5 w-5" color="white" />
      </li>
      <li>
        <Chat className="h-5 w-5" color="#FF3406" />
      </li>
      <li>
        <Bell className="h-5 w-5" color="white" />
      </li>
      <li>
        <Trash className="h-5 w-5" color="white" />
      </li>
    </ul>
  );
};

export default Menu;
