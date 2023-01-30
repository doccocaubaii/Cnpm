package edu.homework.qlnk.repo.entity;

import jakarta.persistence.*;

import java.sql.Date;

/**
 * This class was created at 1/30/2023 09:27:41
 *
 * @author Minh.LN
 */

@Entity
@Table(name = "nhan_khau", schema = "oop", catalog = "")
public class NhanKhauEntity {


    private int id;
    private String maHoKhau;
    private String hoTen;
    private Date ngaySinh;
    private String gioiTinh;
    private String socmnd;
    private String diaChiHienNay;
    private String quanHeVoiChuHo;
    private String sdt;
    private Integer isActive;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "ma_ho_khau")
    public String getMaHoKhau() {
        return maHoKhau;
    }

    public void setMaHoKhau(String maHoKhau) {
        this.maHoKhau = maHoKhau;
    }

    @Basic
    @Column(name = "ho_ten")
    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    @Basic
    @Column(name = "ngay_sinh")
    public Date getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(Date ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    @Basic
    @Column(name = "gioi_tinh")
    public String getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    @Basic
    @Column(name = "socmnd")
    public String getSocmnd() {
        return socmnd;
    }

    public void setSocmnd(String socmnd) {
        this.socmnd = socmnd;
    }

    @Basic
    @Column(name = "dia_chi_hien_nay")
    public String getDiaChiHienNay() {
        return diaChiHienNay;
    }

    public void setDiaChiHienNay(String diaChiHienNay) {
        this.diaChiHienNay = diaChiHienNay;
    }

    @Basic
    @Column(name = "quan_he_voi_chu_ho")
    public String getQuanHeVoiChuHo() {
        return quanHeVoiChuHo;
    }

    public void setQuanHeVoiChuHo(String quanHeVoiChuHo) {
        this.quanHeVoiChuHo = quanHeVoiChuHo;
    }

    @Basic
    @Column(name = "sdt")
    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    @Basic
    @Column(name = "is_active")
    public Integer getIsActive() {
        return isActive;
    }

    public void setIsActive(Integer isActive) {
        this.isActive = isActive;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NhanKhauEntity that = (NhanKhauEntity) o;

        if (id != that.id) return false;
        if (maHoKhau != null ? !maHoKhau.equals(that.maHoKhau) : that.maHoKhau != null) return false;
        if (hoTen != null ? !hoTen.equals(that.hoTen) : that.hoTen != null) return false;
        if (ngaySinh != null ? !ngaySinh.equals(that.ngaySinh) : that.ngaySinh != null) return false;
        if (gioiTinh != null ? !gioiTinh.equals(that.gioiTinh) : that.gioiTinh != null) return false;
        if (socmnd != null ? !socmnd.equals(that.socmnd) : that.socmnd != null) return false;
        if (diaChiHienNay != null ? !diaChiHienNay.equals(that.diaChiHienNay) : that.diaChiHienNay != null)
            return false;
        if (quanHeVoiChuHo != null ? !quanHeVoiChuHo.equals(that.quanHeVoiChuHo) : that.quanHeVoiChuHo != null)
            return false;
        if (sdt != null ? !sdt.equals(that.sdt) : that.sdt != null) return false;
        if (isActive != null ? !isActive.equals(that.isActive) : that.isActive != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (maHoKhau != null ? maHoKhau.hashCode() : 0);
        result = 31 * result + (hoTen != null ? hoTen.hashCode() : 0);
        result = 31 * result + (ngaySinh != null ? ngaySinh.hashCode() : 0);
        result = 31 * result + (gioiTinh != null ? gioiTinh.hashCode() : 0);
        result = 31 * result + (socmnd != null ? socmnd.hashCode() : 0);
        result = 31 * result + (diaChiHienNay != null ? diaChiHienNay.hashCode() : 0);
        result = 31 * result + (quanHeVoiChuHo != null ? quanHeVoiChuHo.hashCode() : 0);
        result = 31 * result + (sdt != null ? sdt.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        return result;
    }
}
