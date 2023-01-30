package edu.homework.qlnk.repo.dto;

public class NhanKhauDTO {
    private Integer id;
    private String maHoKhau;
    private String hoTen;
    private java.sql.Date ngaySinh;
    private String gioiTinh;
    private String socmnd;
    private String diaChiHienNay;
    private String quanHeVoiChuHo;
    private String sdt;
    private Integer isActive;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaHoKhau() {
        return this.maHoKhau;
    }

    public void setMaHoKhau(String maHoKhau) {
        this.maHoKhau = maHoKhau;
    }

    public String getHoTen() {
        return this.hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public java.sql.Date getNgaySinh() {
        return this.ngaySinh;
    }

    public void setNgaySinh(java.sql.Date ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    public String getGioiTinh() {
        return this.gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getSocmnd() {
        return this.socmnd;
    }

    public void setSocmnd(String socmnd) {
        this.socmnd = socmnd;
    }

    public String getDiaChiHienNay() {
        return this.diaChiHienNay;
    }

    public void setDiaChiHienNay(String diaChiHienNay) {
        this.diaChiHienNay = diaChiHienNay;
    }

    public String getQuanHeVoiChuHo() {
        return this.quanHeVoiChuHo;
    }

    public void setQuanHeVoiChuHo(String quanHeVoiChuHo) {
        this.quanHeVoiChuHo = quanHeVoiChuHo;
    }

    public String getSdt() {
        return this.sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public Integer getIsActive() {
        return this.isActive;
    }

    public void setIsActive(Integer isActive) {
        this.isActive = isActive;
    }
}
