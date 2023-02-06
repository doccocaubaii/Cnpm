package edu.homework.qlnk.repo.dto;

public class HoKhauDTO {
    private Integer id;
    private String maHoKhau;
    private Integer idChuHo;
    private String diaChi;
    private Integer isActive;

    private Integer score;
    private String tenChuHo;

    private int slThanhVien;

    public String getTenChuHo() {
        return tenChuHo;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setTenChuHo(String tenChuHo) {
        this.tenChuHo = tenChuHo;
    }

    public int getSlThanhVien() {
        return slThanhVien;
    }

    public void setSlThanhVien(int slThanhVien) {
        this.slThanhVien = slThanhVien;
    }

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

    public Integer getIdChuHo() {
        return this.idChuHo;
    }

    public void setIdChuHo(Integer idChuHo) {
        this.idChuHo = idChuHo;
    }

    public String getDiaChi() {
        return this.diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public Integer getIsActive() {
        return this.isActive;
    }

    public void setIsActive(Integer isActive) {
        this.isActive = isActive;
    }
}
