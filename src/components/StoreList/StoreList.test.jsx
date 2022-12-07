import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoreList from "./StoreList";

describe("<StoreList> component", () => {
    it("should render a button", () => {
        render(<StoreList 
            stores={[]}
            sale={true}
            loadData={() => {}}
        />);
        
        expect(screen.getByRole("button")).toBeInTheDocument();
    })

    it("should apply a sale class based on sale prop", () => {
        const { container } = render(<StoreList 
            stores={[]}
            sale={true}
            loadData={() => {}}
        />);

        expect(container.firstChild.classList.contains("sale")).toBe(true);
    });

    it("should not apply a sale class based on sale prop", () => {
        const { container } = render(<StoreList 
            stores={[]}
            sale={false}
            loadData={() => {}}
        />);

        expect(container.firstChild.classList.contains("sale")).toBe(false);
    });

    it("should render a list of StoreCards based on the stores prop", () => {
        const stores = [
            { id: 1, address: 'abc123' },
            { id: 2, address: 'abc123' },
            { id: 3, address: 'abc123' }
        ]

        render(<StoreList 
            stores={stores}
            sale={false}
            loadData={() => {}}
        />);

        expect(screen.getAllByText(/abc123/i).length).toEqual(stores.length);
    });

    it("should call loadData prop when button is clicked", () => {
        const mockLoadData = jest.fn();
        
        render(<StoreList 
            stores={[]}
            sale={false}
            loadData={mockLoadData}
        />);

        userEvent.click(screen.getByRole("button"));
        expect(mockLoadData).toBeCalled();
    });

    it("should match the snapshot", () => {
        const stores = [
            { id: 1, address: 'abc123' },
            { id: 2, address: 'abc123' },
            { id: 3, address: 'abc123' }
        ]

        const snapshot = render(<StoreList 
            stores={stores}
            sale={true}
            loadData={() => {}}
        />);

        expect(snapshot).toMatchSnapshot();

    })
});
