// -= Factory =-
interface Food {
    prepare(): void;
}

class Pizza implements Food {
    prepare(): void {
        console.log("Preparando pizza");
    }
}

class Sushi implements Food {
    prepare(): void {
        console.log("Preparando sushi");
    }
}

const FoodTypes = {
    pizza: Pizza,
    sushi: Sushi
} as const;

class FoodFactory {
    static createFood(type: keyof typeof FoodTypes): Food {
        return new FoodTypes[type]();
    }
}

// -= Abstract Factory =-
interface FoodFactory {
    createPizza(): Pizza;
    createSushi(): Sushi;
}

class OtherPizza extends Pizza {
    prepare(): void {
        console.log("Preparando otra pizza");
    }
}

class DifferentPizza extends Pizza {
    prepare(): void {
        console.log("Preparando diferente pizza");
    }
}

class OtherSushi extends Sushi {
    prepare(): void {
        console.log("Preparando otro sushi");
    }
}

class DifferentSushi extends Sushi {
    prepare(): void {
        console.log("Preparando diferente sushi");
    }
}

class OtherFactory implements FoodFactory {
    createPizza(): Pizza {
        return new OtherPizza();
    }

    createSushi(): Sushi {
        return new OtherSushi();
    }
}

class DiferentFactory implements FoodFactory {
    createPizza(): Pizza {
        return new DifferentPizza();
    }

    createSushi(): Sushi {
        return new DifferentSushi();
    }
}

// -= Builder =-
class LasañaBuilder {
    size: string = "mediana";
    cheese: string = "mozzarella";

    setSize(size: string) {
        this.size = size;
        return this;
    }

    setCheese(cheese: string) {
        this.cheese = cheese;
        return this;
    }

    build(): Lasaña {
        return new Lasaña(this);
    }
}

class Lasaña {
    private size: string;
    private cheese: string;

    constructor(builder: LasañaBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
    }

    describe(): void {
        console.log(`Lasaña (${this.size} | ${this.cheese})`);
    }
}