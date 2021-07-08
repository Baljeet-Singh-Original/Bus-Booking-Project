import React from 'react'
import './TicketPage.css'
import { addTicket } from '../../../actions/profile'
export default function TicketPage({ history }) {
    const saveData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        let nameArray = localStorage.getItem("nameData")
        let noArray = localStorage.getItem("reservedSeats")
        let tokenData = localStorage.getItem("selectedBusId")
        let dat = localStorage.getItem("date")
        const formData = { from, to, nameArray, noArray, tokenData, dat }
        console.log(formData)
        addTicket(formData)
        console.log('first point')
        // addTicket(from, to, nameArray, noArray, tokenData, dat)
        // console.log(from, to, nameArray, noArray, tokenData, dat)
    }
    const getLocationData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        saveData()

        return (
            <div>
                <p><strong>From: </strong> {from}</p>
                <p><strong>To: </strong> {to}</p>
            </div>
        )
    }
    const getPassengerName = () => {
        let nameArray = localStorage.getItem("nameData")
        let names = JSON.parse(nameArray)
        return names.map((name, idx) => {
            return (
                <div key={idx}>
                    <p className="names">{name}</p>
                </div>
            )
        })
    }
    const getSeatNumbers = () => {
        let noArray = localStorage.getItem("reservedSeats")
        let arr = JSON.parse(noArray)
        return arr.map((element, idx) => {
            return (
                <div key={idx}>
                    <p classsName="seatNo">{element}</p>
                </div>
            )
        })
    }
    const getIdNumber = () => {
        let tokenData = localStorage.getItem("selectedBusId")
        return (
            <p className="idData">
                {tokenData}
            </p>
        )
    }
    const getDateValue = () => {
        let dat = localStorage.getItem("date")
        return <p><strong> On: </strong>{dat}, 10 AM (Hourly commute)</p>
    }
    const printTicket = () => {
        window.print()
    }
    return (

        <div className="container">
            <div className="tpMain">
                <article className="ticket">
                    <header className="ticket__wrapper">
                        <div className="ticket__header">
                            🎟 Baljeet Travels 🎟
                        </div>
                    </header>
                    <div className="ticket__divider">
                        <div className="ticket__notch"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>
                    <div className="ticket__body">
                        <section className="ticket__section">
                            {getLocationData()}
                            <h3>Seat Numbers</h3>
                            {getSeatNumbers()}
                            <p>Have a nice journey. <span>{getDateValue()}</span></p>
                        </section>
                        <section className="ticket__section">
                            <h3>Passenger Names</h3>
                            {getPassengerName()}
                        </section>
                        <section className="ticket__section">
                            <h3>Payment Method</h3>
                            <p>Credit Card</p>
                        </section>
                    </div>
                    <footer className="ticket__footer">
                        <p>Transaction-ID</p>
                        {getIdNumber()}
                        <button className="btn btn-primary" onClick={printTicket}> Print </button>
                    </footer>
                </article>
            </div>

        </div>

    )
}
