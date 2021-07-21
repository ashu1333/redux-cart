import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Nav = () => {
  const { cartReducer } = useSelector((state) => state);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX///95sllMgipVkyxKeiuVxnV7tFt3sVZxrk51sFNKgCdzr1B2sVWWxnZHeCdNhCo+cxf6/PlQiiuRxHBSkSf2+vRHfyKOw2uJvWlBdB3v9utTjyxNjx5PiCuDuWNJjRY2bwClypHB3bBtpkzX589TgzSVsoXE3LfM4cG4yLBknEO31aeQv3ZDigCYw4Hc6tWnz42qwZ7f6NpbiD9ulVfi6t2pwJ1ZjDtakTix0Z+evo5toU6ey4GErm2szpmSwHl7qmB8n2jN3MWIqnWTr4XG1r48eQpkj0pjlEOJsXGwyqKdv4pwn1XQ5cJhnTqYvIM4egBtmlRvz9PvAAAQyElEQVR4nO2d+VvaWBfHiygJBtPkxShkGDZToYKguHRoHanWZdp3nJn3//9n3oQkmOWec1cW5+n5pY88lebTe+5ZvnfJu3c/7af9tH+/2e6P67utp3a7ffDwaK/7adTb/cNF26qb5rZvZt36cP7vYnSuL3y67YSZ1sXVup9KnTkPGbyQsf247gdTZPa5Vc/hza39cd3PpsQmzxaZL0C8X/fTKbBzKz39TLP+6rHm9vHDx8f7txxznMvEAPoR1Hy+vPv27fmVsV63LKt98dFZ95MK2tXF6ww02xfHEzf+PB14TMs6fpOME/PVH9uXr844uctPyfruGww79wtnNK3nyevnx8TYalp363tUMRsvYkzdTIzP5AOQO7brF+76nlbArhaA1mXiyT9a+dz/NhGdDzFJ+zjx8XU7D2a9Dvbz20kc9nPsi+3zxMcPyeQRcdX7j88xY/1ybU/Ma98WgMkQmQA0rcvLEMvy/wse48lpXa/tkfns3CIBJly0fvH47jH8S2YQQ93LGHG8rmfmsqsYJeWijwtAs33sTzjnIPzpYJ7sI0TzTUxFOy5ZrGSQuVq4qFkP+6a7EKo9Sf7Sm/DTeLql4sYCe9v8EPW+kS/Xw4GexH66+SljEgGau8la89haALrpv1h/CH+8jn48zn7hxlmcCVPd3ySehObBYozc7VC1+RT9HI1ye9MHMRqKbesh+WmMbdYT8sxz+OFT9ON9+00Mohv76EUyKC7Sh5UUZ+6iQYt/DonN7c3upOJc304mNicuYNIDe50Mpu8Wg2glc8zGWfSQGVc7rscDm/rLUc634glrR4P4HP3o9a43T4+LSrF0HHUXJU5aI723Mp4bOXMwqG6/Y+h/PT192jCXjYfQSnXsD9EQ1h/Sf3tsZf6ya0YO0J+V9Uqh9NvW1sGGIUYBP1172e04E2Ye1s0SzmPPhy+FilEp+KZtbW0a4mIIU9MnDqRWToppZz9/fP+lUCoVQisd7W4cYjwLn1OfxgP7IVdUpwkdr9Nc4AWEJ3PCTUKM67W0lh1/SkgCCS91+7OCXi4kLZiGG4Z4VycN4SJD5n8hJnR7Nd3QChlbEG4MYtwfWakhjBWbbCANzAoqmE9fCgS8FOGmIF4Th/A+dl1CQW0FeMmpl7b3WxuGuGuSQmaUDM284Gt7RwienywShBuB+NEiZT17l5RAfOftzXQdpssRbh28XzviM3G+jaMUuZt0UncwJE890Es3AXERZ9K157mVddLxlAkvR7h2RyXHmTjdx07qdfysx4SX9dIA8eC3P77/6PV6/fEaWO0MSmxxN+WPrNPv6Jmkzke4tbW7+0ujFdjpaatx8vXz597qCOPK5SldmkW5wrxweyNdr7DjkQm3tv5TXNj+fqNx+t+VEUZJIZvXwwDrZ72yzuibCytpBMAkYYi5KgU5dtL2JP35Zd3HK2FZDyHcJRD+miE8XdWMjNTCtP7kT70/j8TwCovmiUa4qoWOKJKm5Bm3P9I0QTxmwtaPFRFG5bW1cFK3N+SfegKEjRURurGTzn+yrwZNxqTOTfg+S/h9NYQfX9ccnPGtAjxmwv3iaghD9dq0Hr1Rk7lmoRGekAi3MoTF09UQBhvWTD/raUZFDR5ImB3D4ulKFnIm1oc/vu7sNVXB8RC2+qsg7BV2fKuKZwZ2wpyXtpYv/F91b6o7O3tVtSMYyDRMhI3PS6Wzx9PqYTUYwKay+Uch/CUbTL8sD8/xbndCPNUOykV4siQ89+UsxtvZqannYyYsFpdRe7u9m2o1xvMBlXtoSEgCzBO2VNfe9ri7d/hKtzTAdRGOpzdpvKUBFgq/EgmzLXCxpVLJ6OfwljQH50YSMQiEKmvv7mEWz4+iSwNkJdz/XRmgmxs/35aQJnDCbIPoJ0RlUs0LgVB1ISNAWGwoq72necKlRZnAiOmQQKiuuzjLEu4tcRKChLnmothSdXzKvsmOoOJ2SZSwMVVE6OQi6VJ9tECUS4mEqroLN0e4TD5ApiER7n9VROhlCZfro+yExYYiwmyyWF4xw0uoSozqZgiXmOvnhGQRg0SoqvbOJIvl+ihMmJMx1NXeqWTBmQq1ctkwDN03/48yk+LIQ6hI2U8Emj0OH9V8sPKwMx10+/2+1+/3BtPOMPiMgslBqKi7SKbDapMNMKCb9TwnXxq7/WkJ1/5BwryMsf+XEsLxgrBWYsr0WlkfDrAYEOxmU0KoKF3E6XCPTTfU9OaUfi+EB29cAIQoImFLSe3dq0YhhgVQ02t9lq5tDA8iINMQWmCf0FNBGPdODFnC52P8J2+xMeQgVNJdnDEn+nKJdbHERraflMhCFJFQTe29FxFSnVTvMEu0HhZpIMJ8C6ym9nZ22AgrOsdqF+KkhRJZxCAT/qmAMJahKD2hUeMJa9j2Sy7CvxQo+3E6xAONMeLRvTAn5SIsthRcWPTCEkr1Dtd3drBtfCUgHZIJJ/R/jWZx74SFUk5AG60dQEJC+6Sku7itUpULgw8QS/eB8RA2/pYnPKM2TeUR51eiTgoJUQChfHcRS4mwdKGVOOOZgzspSEhon1Qo+y61s9d5wxkaSUGZhkxYbEini1hKBAONzj3XcSflJJTfZhr3TtADaUPurzQwQF5C+do7TIdw68TtoxQn5fZSaakmSodQoCnfcn8j7qQYIaEFVtBdROkQCjQG/zSg7NvnJJTvLs7QQFPmX/2hOCks05AJpaUaew8NNDr/EFKcFCMktMDyyn4kJQKBpoyUa7bbG0xHs9FoOuhdvf5H4OlehFBS2b86xAKNDn67O63pc5Fbq5QNQzdmt15ISXNSWGoDCGW3mUbpkBxotBpUMk0rGdG3UtZLo0ClojkpLERBhJLdRZQOyYEGijP2kDhQFd0YuBQ+fkLZ7mJQRQIN5KQzsGox8HqGQkhqgYv7R3KE85U1oHXSmmQn7dKmGk4ISW0QoeTaxR4SaCoz4q9gWigLISTTkBtEH1FO2ccCjUGe432pIeQnlFP2o96JHGh08ldPOU6L8hESS2/J7mKMEpLdQ3azDS+h3L4hDwk0BZ38O5Kb94kHSDFCuU2YYe8EVDQl8u/M5CINP+FXGcJwZQ2oaIDuvkvPeYiRDwGjhCcyQsYZMg0rQNntyqXDI15CuW2mN0hFUx4AvzSQQUQaYKBBlFq7cLDWyYAI380k8oUIoUTt7WKBBiZ0auKIAoQNicsHwnQIaDSIguHUhKONCKFEdxH2TpBGgzX4I9G5KEAoc4gtTIdABse1YNFwgxISG0R/EMXXLuZSIigGAxk/Mk/sWDci04CEp+KE8+4QXHUCqrbYXHKnvwRC8e4iXFkDV51gHSqyqcDdCkKEwsq+U4U1Gt8MqsrlFbhrVERqA5p8mbWLsDsEH0ajr/263GlDhFC89g6kRHRPMEPJe8s5GREhCiQUV/Zf0EDjT0QWMbbHF1NRQrKMIaHsz9Mhso8GkKIyNua6LkOIULj27lRp+2iY1gxcniszxAhFpZob2k6hCtsSN08ljhICDaL4BRJV6uEDxv2ITo09ayBCFDiGorX3fGWNcgSozKYguGx74H3TYMkbHkPR2nveO1H2PrPuh2KWNoi30VEJBS+QmK+s0fY+62AfnPnvYkVECcntk29iUs18kz71iVi3BjO2U5jUBhMKHvGaVpmOIADifs6GbMc1kKJNOWHQO7GcNWQcRbapKEYoqOzv0QNNhMgmdg1YqnBBQqFNmHYVa53SiEzhhmVhsQTun50b0CAKrl3MpUTGNMa2DZpB70dlGoRQaM/+mC3QhGYMGf4Jh/49goRiR7w8xkATWrnJEM6oW01ohFCDKHaBRNA7cZz51eiiBkPaR2UahFBI2Q+kRK5j2wzxhrp6KkootAkzSIc8gD4idbPpaJMI7Rv+K0yoIZW6T4NCCLVPQt2FsydwewJtFKkTUZSw2OIndPkCTYyIz0VbYmciTiig7AfdocD9EBTpRpIQahCFlP0X7kAzN62Jfiut1xceQ4F00a2yVzRJwzsNWguFC1HIGAoo+346FLqmBV9WpG22ESYUUPb9dCh2i0kFK6BoCRHZe0kh5N6EGayswYEGe0401lDHEJVpEKGmuM9LGEiJIEdlhCj1wKbM0KjzUJiQW9l3D5FAU3K8CjgYRhf5WmphKk7Iq+x7h3Cg0WbYGjYaTKntE54OMUJeZf8FCTRhnzQA1rDR02zU9olCCLbA/Mq+nw7hQ5VhtPSHkcAI7W8Pf2V5hNzpolOFD1UuypZeKa+8wJvB3jGcmJEg5L1A4ga+gjXB4Az0DCNetdG6J+SYc2hgg1jkVvaRQJOaaM60kHwTUFlD/50z8cOHVELOdOGnQyjQaJm9UHbwdtSyps0viBrh/5HUg2syhHwXSFwdghUN4WCs278dNTVteEvR21zqsS4JQs7a24MDDbASY9v0HpQuYtAI4faJN128VMFjE7xXKCRMVohCCff51i6mVSjQVHhvwXg1qpPSCeHmorh/wiVknIFvrWAQfiHrUdctZAiLLS7nuoEDjfjef/ppGilCLmXfATUarSYMSC9oJMeQR6pxwUCDFmW4MRz5okltKCFXuhiDgYZtoxfJWM4l0mQanJBH2ffAQKOJAjosm4akCLlOBHfB98eURAPNLcsqPk2IwlpgPmV/CioYWlMMkSHMFOgyDU7Is830DI4KYogu225oOUIOZd++QaRSjXWLUPILm2ybEyUJ2YsRB381gI6paURA1tNsJRog0uRznUpwKS+qorWBOUDWHftyhBy7asaHlCep8NzwxbNFWI6QfRPmC33FQq+xpn6PYyc7vjMxMEyo4Vi76DLdGTxikQ1snqNBVCEKJyw2mKWaKdPib0WfUaNqv8lzaIba4qMtMM8mzDPGJ9J0rYvFnH6N72yXNCHz2sUe+3MZwf3rxNYzeHMu5yKyLCHziWD8BtWsaYbeHA28cWIwnbHXGQq8OZeBECu92dOFy7sHQ6uUdaPSrA1no9FoVmv6Iyv05lzZMWReu/DEbrbQNK2izU3o19kI0TFkVvZfpG62kDBpQtZtpnJ3d8gQUmUaGiGjsk9bP9lgQsbae7mv5JIkxNon5nQhd9GTDCFVaqMRsq1dOHKXdUkRUgFxQsbam/kQ1uYRFltMaxeeTn9l0aYSMl4N7bj9waii+2XKBhJiLTDnXZ+O1xuVDN1Y4XAqIOTehOmM+51hSQ/X6ZdPSJXaaISCV0P7XjsdlVbgtfKEMnd92k6/N9L8IMRzup7XGAhRGUPBW7xsr9+pBV67HE55QoFTCQTzJ+ftqBl4rWJM/CA3G6G6F647rjfoBJjqYm2JhRBtgf2EKHq9AmS21+uUdEWxtnQkRbjfaLVaRwpeHkQw32uHTUN6crI0wGTCfZ+u+OX7ozoXJZhz5U0lvZaJMNcg+nCnJ99/TJS9pBs12xl3b4Uxuccw8MvTL5/7roI3d/GZ77U1jd9reQgDv2wUv/eW6pc0TG86qpV5hpPVS4OhO/n6+X41fomb7Y4HnRprN8ZCeHDQan39O/m2hU0w56o3bTKkFFym2d09eHr65/dzb7PgEnbVHwybZawQggkDuK1Px4/LSXZKLfDaITQ5yYQHPt3z3flkY4cub7Z71Z0Og/dYZzBzUtvcL++O713pV4+txXyv9UOtbrxOziThbjB0T8fnb8AvcfPL99GwEnltTBjAXfzv/P4N+SXF3EmvMwsm52+786G7/HY/eZt+iZrj9gZ//PN0fP2WQspP+2k/jdH+D4I1+c7l2iskAAAAAElFTkSuQmCC"
                alt="logo"
              />
            </Link>
          </div>
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{cartReducer.totalQuantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;