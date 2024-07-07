import SearchIcon from "../../../assets/Icons/bottom-bar/search.svg";
import TripsIcon from "../../../assets/Icons/bottom-bar/trips.svg";
import ReservationIcon from "../../../assets/Icons/bottom-bar/reservation.svg";
import ProfileIcon from "../../../assets/Icons/bottom-bar/profile.svg";
import ChatIcon from "../../../assets/Icons/header/chat.svg";
import NotificationIcon from "../../../assets/Icons/header/notifications.svg";
import FilterIcon from "../../../assets/Icons/search/filter.svg";
import Search2Icon from "../../../assets/Icons/search/search.svg";
import ExploreIcon from "../../../assets/Icons/profile/explore.svg";
import LocationIcon from "../../../assets/Icons/profile/search/location.svg";
import DateIcon from "../../../assets/Icons/profile/search/date.svg";
import UserIcon from "../../../assets/Icons/profile/search/user.svg";
import HistoryIcon from "../../../assets/Icons/profile/search/history.svg";
import BackIcon from "../../../assets/Icons/back.svg";
import PersonIcon from "../../../assets/Icons/profile/search/person.svg";
import FlagIcon from "../../../assets/Icons/profile/search/flag.svg";
import { SvgProps } from "react-native-svg";

export const icons = {
  bottomTabs: {
    SearchIcon: (props: SvgProps) => <SearchIcon {...props} />,
    TripsIcon: (props: SvgProps) => <TripsIcon {...props} />,
    ReservationIcon: (props: SvgProps) => <ReservationIcon {...props} />,
    ProfileIcon: (props: SvgProps) => <ProfileIcon {...props} />,
  },
  header: {
    ChatIcon: <ChatIcon />,
    NotificationIcon: <NotificationIcon />,
  },
  search: {
    FilterIcon: <FilterIcon />,
    SearchIcon: <Search2Icon width={24} height={24} />,
  },
  profile: {
    ExploreIcon: <ExploreIcon />,
    LocationIcon: <LocationIcon width={13} height={19} />,
    DateIcon: <DateIcon />,
    UserIcon: <UserIcon />,
    HistoryIcon: <HistoryIcon />,
    FlagIcon: <FlagIcon />,
    PersonIcon: <PersonIcon width={12} height={12} />,
  },
  common: {
    BackIcon: <BackIcon width={10} height={10} />,
  },
};
