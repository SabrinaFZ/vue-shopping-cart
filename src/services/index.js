import * as productsService from './products';
import * as departmentsService from './departments';
import URL from './urls';

const services = {
    [URL.PRODUCTS]: productsService,
    [URL.DEPARTMENTS]: departmentsService
}

export default services