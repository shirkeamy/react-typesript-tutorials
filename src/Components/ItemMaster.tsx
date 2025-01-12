import React from "react";

interface IItemMasterProps {
    itemList: string[];
}

// const ItemMaster: React.FC<IItemMasterProps> = ({ itemList }) => {
const ItemMaster: React.FC<IItemMasterProps> = (props: IItemMasterProps) => {
    const { itemList }: IItemMasterProps = props;
    return (
        <>
            <h1>Item Master</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at explicabo in illum rem saepe inventore sed quas quisquam sequi?
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Item1</th>
                        <th>Item2</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemList.map((item: string) => (
                            <tr>
                                <td>{item}</td>
                                <td>{item}</td>
                                <td>{item}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>


        </>
    )
}

export default ItemMaster;