class SkillModel {
    id: number;
    name: string;
    iconId: string;
    level: number;
    category: string;
    displayOrder: number;

    constructor (id: number, name: string, iconId: string, level: number, category: string, displayOrder: number) {
        this.id = id;
        this.name = name;
        this.iconId = iconId;
        this.level = level;
        this.category = category;
        this.displayOrder = displayOrder;
    }
}

export default SkillModel;