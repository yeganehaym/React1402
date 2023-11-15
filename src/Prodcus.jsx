import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as service from "./dataService";

export class Prodcus extends Component{

    state={
        page:1,
        totalPage:1,
        pageSize:3,
        products:[]
    }

    componentDidMount() {
        const products=service.getData(this.state.page);
        const totalPage=service.getTotalPageCount()
        this.setState({products,totalPage})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.page!=this.state.page)
        {
            const products=service.getData(this.state.page);
            this.setState({products})

        }

    }

    getPages=()=>{
        let pages=[];
        for (var i=0;i<this.state.totalPage;i++)
        {
            pages.push(i+1);
        }

        return pages.map(p=><li onClick={()=>this.setState({page:p})} className={"page-item" + (this.state.page==p?" active":"")}><a className="page-link" href="#">{p}</a></li>)
    }

    nextPage=()=>{
        let page=this.state.page;
        page++;
        if(this.state.totalPage<page)
            return
        this.setState({page});
    }

    prevPage=()=>{
        let page=this.state.page;
        page--;
        if(page<1)
            return
        this.setState({page});
    }
    render() {

        return(
            <>
            <table className={"table table-bordered table-striped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>TotalPrice</th>
                </tr>
                </thead>
                <tbody>

                {
                    this.state.products.map((product,index)=><tr key={product.id}>
                        <td>{((this.state.pageSize*(this.state.page-1))+ index+1)}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{(product.quantity*product.price)}</td>
                    </tr>)
                }
                </tbody>
            </table>

                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"
                                onClick={this.prevPage}><a className="page-link" href="#">Previous</a></li>
                            {
                                this.getPages()
                            }

                            <li  onClick={this.nextPage} className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}