package edu.homework.qlnk.repo.entity;

import jakarta.persistence.*;

/**
 * This class was created at 1/30/2023 09:27:39
 *
 * @author Minh.LN
 */

@Entity
@Table(name = "ho_khau", schema = "oop", catalog = "")
public class HoKhauEntity {


    private int id;
    private String maHoKhau;
    private Integer idChuHo;
    private String diaChi;
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
    @Column(name = "id_chu_ho")
    public Integer getIdChuHo() {
        return idChuHo;
    }

    public void setIdChuHo(Integer idChuHo) {
        this.idChuHo = idChuHo;
    }

    @Basic
    @Column(name = "dia_chi")
    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
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

        HoKhauEntity entity = (HoKhauEntity) o;

        if (id != entity.id) return false;
        if (maHoKhau != null ? !maHoKhau.equals(entity.maHoKhau) : entity.maHoKhau != null) return false;
        if (idChuHo != null ? !idChuHo.equals(entity.idChuHo) : entity.idChuHo != null) return false;
        if (diaChi != null ? !diaChi.equals(entity.diaChi) : entity.diaChi != null) return false;
        if (isActive != null ? !isActive.equals(entity.isActive) : entity.isActive != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (maHoKhau != null ? maHoKhau.hashCode() : 0);
        result = 31 * result + (idChuHo != null ? idChuHo.hashCode() : 0);
        result = 31 * result + (diaChi != null ? diaChi.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        return result;
    }
}
