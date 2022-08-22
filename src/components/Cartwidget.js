import { useContext } from 'react'
import  {CartContext }  from '../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import { IconButton } from '@mui/material'

const Cartwidget = () => {

          const {getCantProducts}  = useContext(CartContext)

  return (
    <div>
            <IconButton style={{ color: '#41416C' }} >
                <Badge badgeContent={getCantProducts()}  color="success">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>          
    </div>
  )
}
export default Cartwidget
