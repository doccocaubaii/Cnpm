import Diem from '~/pages/Diem';
import HoKhau from '~/pages/HoKhau';
import Login from '~/pages/Login';
import NhanKhau from '~/pages/NhanKhau';
import SinhHoat from '~/pages/SinhHoat';
import SuaHoKhau from '~/pages/SuaHoKhau';
import SuaNhanKhau from '~/pages/SuaNhanKhau';
import ThemHoKhau from '~/pages/ThemHoKhau';
import ThemNhanKhau from '~/pages/ThemNhanKhau';

//public routes
const publicRoutes = [{ path: '/', component: Login, layout: null }];

// private routes
const privateRoutes = [
    { path: '/nhan-khau', component: NhanKhau },
    { path: '/ho-khau', component: HoKhau },
    { path: '/nhan-khau/them-nhan-khau', component: ThemNhanKhau },
    { path: '/ho-khau/them-ho-khau', component: ThemHoKhau },
    { path: '/nhan-khau/sua/:id', component: SuaNhanKhau },
    { path: '/ho-khau/sua/:id', component: SuaHoKhau },
    { path: '/bieu-mau', component: SinhHoat },
    { path: '/danh-gia', component: Diem },
];

export { privateRoutes, publicRoutes };
