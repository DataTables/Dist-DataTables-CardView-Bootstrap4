/*! CardView Bootstrap 4 styling 1.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

import DataTable from 'datatables.net-bs4';
import CardView from 'datatables.net-cardview';


Object.assign(DataTable.CardView.classes, {
	card: 'card dtcv-card',
	cardContent: 'card-body'
});

export default DataTable;

