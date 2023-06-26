const car = {
    manufacturer: "LADA",
    model: "Proira",
    year: 2007, // Год выпуска
    averageSpeed: 80, // Средняя скорость

    showInfo: function() {
        alert(`Производитель: ${this.manufacturer}\nМодель: ${this.model}\nГод выпуска: ${this.year}\nСредняя скорость: ${this.averageSpeed} км/ч`);
    },

    totalTime: function(distance) {
        let drivingTime = distance / this.averageSpeed;
        let restTime = Math.floor(drivingTime / 4);
        let totalTime = drivingTime + restTime;
        return totalTime;
    },

    yearsSinceRelease: function() {
        let currentYear = new Date().getFullYear();
        let yearsSinceRelease = currentYear - this.year;
        return yearsSinceRelease;
    }
};

car.showInfo();

console.log(`Время в пути: ${car.totalTime(1000)} часов`);

console.log(`Прошло лет с момента выпуска автомобиля: ${car.yearsSinceRelease()} лет`);