import React from 'react'
import { PRODUCTS_DB } from '../modal/product.jsx'

const ProductList = () => {



	const prodList = PRODUCTS_DB









	return (
		<div>
			<h3>Product List</h3>
			<table>
				<tbody>
					{prodList.map((prod) => (

						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.name}</td>
							<td>{prod.price}</td>
						</tr>

					))}
				</tbody>


			</table>
		</div>
	)
}

export default ProductList
