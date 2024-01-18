import App from "../App.tsx";
import {render} from "@testing-library/react";

describe('App', () => {
    it('renders successfully', () => {
        const {baseElement} = render(<App/>);
        expect(baseElement).toBeTruthy();
    });
});
