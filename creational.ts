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