import { Link } from 'react-router-dom'
import { Headerbar, Links, LinkItem, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/Categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoção</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produtos(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </Headerbar>
  )
}

export default Header
