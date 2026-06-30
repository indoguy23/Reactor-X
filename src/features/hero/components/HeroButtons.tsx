import { Button } from "../../../shared/components/ui/Button";


const HeroButtons = () => {
    return (
        <div className="flex flex-wrap gap-5">

            <Button>
                Explore Projects
            </Button>

            <Button variant="secondary">
                Download Resume
            </Button>

        </div>
    );
};

export default HeroButtons;