import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoreList from "./StoreList";

/* Pattern for writing good tests: Arrange, Act, Assert */

describe("<StoreList />", () => {
    it("should render a button", () => {
        // 1. Arrange
        render(<StoreList
            stores={[]}
            sale={false}
            loadData={() => {}}    
        />);

        // 3. Assert
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should apply a sale class based on sale prop", () => {
        // 1. Arrange
        const { container } = render(<StoreList
            stores={[]}
            sale={true}
            loadData={() => {}}    
        />);

        // 3. Assert
        expect(container.firstChild.classList.contains('sale')).toBe(true);
    });
    
    it("should not apply a sale class based on sale prop", () => {
        // 1. Arrange
        const { container } = render(<StoreList
            stores={[]}
            sale={false}
            loadData={() => {}}    
        />);

        // 3. Assert
        expect(container.firstChild.classList.contains('sale')).toBe(false);
    }); 

    it("should render a list of StoreCards based on the stores prop", () => {
        const stores = [
            {id: 1, address: "abc123"},
            {id: 2, address: "def456"},
            {id: 3, address: "ghi789"}
        ];

        render(<StoreList
            stores={stores}
            sale={true}
            loadData={() => {}}
        />);
        
        expect(screen.getByText(/abc123/i)).toBeInTheDocument();
        expect(screen.getByText(/def456/i)).toBeInTheDocument();
        expect(screen.getByText(/ghi789/i)).toBeInTheDocument();
    });

    it("should call loadData prop when button is clicked", () => {
        // 1. Arrange
        const mockLoadData = jest.fn();
        render(<StoreList 
            stores={[]}
            sale={true}
            loadData={mockLoadData}
        />)

        // 2. Act
        userEvent.click(screen.getByRole("button"));

        // 3. Assert
        expect(mockLoadData).toBeCalled();
    })
});
