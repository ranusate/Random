
print('----------SOAL CERITA 1--------')

brt = int(input("Berat Telur (Kg) :"))
harga = int(input("Harga Telur (hrg) :"))
transport = int(input("Tarif angkot :"))
uangIbu = 200000


def sisaUang(brt, harga, transport):
    harga_telur = brt * harga + transport
    return uangIbu - harga_telur


print("Sisa uang : Rp.", sisaUang(brt, harga, transport))

print('------SOAL CERITA 2--------')

hargaManggaperKg = int(input("Harga per kg (hrg) :"))
beratMangga = int(input("Berat pembelian (brt): "))


def hargaMangga(hargaManggaperKg, beratMangga):
    hargaBayar = (hargaManggaperKg * beratMangga)
    return hargaBayar


print("Harga yang dibayar pembeli : Rp.",
      hargaMangga(hargaManggaperKg, beratMangga))
