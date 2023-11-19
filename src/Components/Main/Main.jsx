// Components
import ContactHeader from "./ContactHeader";
import ProfileHeader from "./ProfileHeader";
import Contatcs from "./Contacts";
import Chat from "./Chat";
import SendMessage from "./SendMessage";

const Main = () => {
  return (
    <div className="flex-1 grid grid-cols-12 gap-2">
      <div className="h-full col-span-4 flex flex-col gap-2 overflow-y-hidden">
        <ContactHeader />
        <Contatcs />
      </div>
      <div className="h-full col-span-8 flex flex-col gap-2 overflow-y-hidden">
        <ProfileHeader />
        <Chat />
        <SendMessage />
      </div>
    </div>
  );
};

export default Main;
