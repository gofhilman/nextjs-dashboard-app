import Pagination from "../../ui/invoices/pagination";
import { fetchFilteredCustomers } from "../../lib/data";
import CustomersTable from "../../ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="p-6">
      <CustomersTable customers={customers} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={1} />
      </div>
    </div>
  );
}
