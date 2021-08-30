import random

lower ="abcdefghijjklmnopqrstuvwxyz"
upper = "ABCDEFGHIJJKLMNOPQRSTUVWXYZ"
numbers = "01234567789"
symbol ="@#-_"


all = lower+ upper + numbers + symbol

length = 10
a= ("".join(random.sample(all ,length)))

print(a**2)